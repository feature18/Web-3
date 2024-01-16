import {baseQueryWithAuth} from "./baseQueryWithAuth";
import {createApi} from "@reduxjs/toolkit/query/react";

export const reviewApi = createApi({
    reducerPath: 'reviewApi',
    baseQuery: baseQueryWithAuth,
    endpoints: (builder) => ({
        createReview: builder.mutation<{
            "review_text": string,
            "review_id": number,
            "user_id": number
        }, { reviewText?: string, userId: number | null}>({
            query: ({userId, reviewText}) => {
                return {
                    url: "/api/review",
                    method: "POST",
                    body: {review_text: "test review", user_id: (userId ?? "").toString() }
                }
            },

        }),
    }),
})

export const { useCreateReviewMutation } = reviewApi