export const SET_ARTIST_DETAILS = "SET_ARTIST_DETAILS";

export const setArtistDetails = (artistDetails: any) => {
    return {
        type: SET_ARTIST_DETAILS,
        payload: artistDetails
    }
}