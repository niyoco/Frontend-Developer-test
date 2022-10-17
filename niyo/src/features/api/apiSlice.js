import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const artApi = createApi({
    reducerPath : "artApi",
    baseQuery : fetchBaseQuery({ baseUrl : "https://api.artic.edu/api/v1/" }),
    endpoints : (builder) => ({
        getAllArtWorks : builder.query({
            query : () => "artworks",
        })
    })
})

export const { useGetAllArtWorksQuery } = artApi;