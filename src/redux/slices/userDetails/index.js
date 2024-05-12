import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const createUser = createAsyncThunk(
    "createUser",
    async (data, { rejectWithValue }) => {
        console.log("data", data);
        const response = await fetch(
            "https://663f2f2ce3a7c3218a4c5d75.mockapi.io/crud",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }
        );

        try {
            const result = await response.json();
            return result;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);


export const showUser = createAsyncThunk(
    "showUser",
    async (args, { rejectWithValue }) => {
        const response = await fetch(
            "https://663f2f2ce3a7c3218a4c5d75.mockapi.io/crud"
        );

        try {
            const result = await response.json();
            console.log(result);
            return result;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const deleteUser = createAsyncThunk(
    "deleteUser",
    async (id, { rejectWithValue }) => {
        const response = await fetch(
            `https://663f2f2ce3a7c3218a4c5d75.mockapi.io/crud/${id}`,
            { method: "DELETE" }
        );

        try {
            const result = await response.json();
            console.log(result);
            return result;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

//update action
export const updateUser = createAsyncThunk(
    "updateUser",
    async (data, { rejectWithValue }) => {
        console.log("updated data", data);
        const response = await fetch(
            `https://663f2f2ce3a7c3218a4c5d75.mockapi.io/crud/${data.id}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }
        );

        try {
            const result = await response.json();
            return result;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const userDetail = createSlice({
    name: "userDetail",
    initialState: {
        users: [],
        loading: false,
        error: null,
        searchData: [],
    },

    reducers: {
        searchUser: (state, action) => {
            console.log(action.payload);
            state.searchData = action.payload;
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(createUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.loading = false;
                state.users.push(action.payload);
            })
            .addCase(createUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.message;
            })
            .addCase(showUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(showUser.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(showUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.message;
            })
            .addCase(deleteUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.loading = false;
                // Remove the deleted user from the state
                state.users = state.users.filter(user => user.id !== action.payload.id);
            })
            .addCase(deleteUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.message;
            })
            .addCase(updateUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                state.loading = false;
                // Find the index of the updated user in the state and replace it with the new data
                const index = state.users.findIndex(user => user.id === action.payload.id);
                if (index !== -1) {
                    state.users[index] = action.payload;
                }
            })
            .addCase(updateUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.message;
            })
    },
});

export default userDetail.reducer;

export const { searchUser } = userDetail.actions;
