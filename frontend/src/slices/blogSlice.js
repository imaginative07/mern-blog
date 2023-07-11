import { BLOG_URL } from '../constants';
import { apiSlice } from './apiSlice';

export const blogApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getBlogPosts: builder.query({
            query: () => ({
                url: BLOG_URL,
            }),
            keepUnusedDataFor: 5,
        }),
        getBlogDetails: builder.query({
            query: (id) => ({
                url: `${BLOG_URL}/${id}`,
            }),
            keepUnusedDataFor: 5,
        }),
    }),
});

export const { useGetBlogPostsQuery, useGetBlogDetailsQuery } = blogApiSlice;