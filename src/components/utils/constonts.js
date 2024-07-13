export const API_URL = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer"+ process.env.REACT_APP_API_URL,
  },
};

export const IMG_PATH_URL = "https://image.tmdb.org/t/p/w500";


export const API_KEY ='93e28511d2a381445564778076ec9dd4'

export const BG_IMG = "https://assets.nflxext.com/ffe/siteui/vlv3/a99688ca-33c3-4099-9baa-07a2e2acb398/ca15fd28-b624-4852-8bfe-9cdd5c88475d/IN-en-20240520-popsignuptwoweeks-perspective_alpha_website_medium.jpg"

export const OPEN_API = process.env.REACT_APP_OPENAI_KEY

export const MULTI_LANG = [{identifier:'en',name:'English'},{identifier:'hindi',name:'Hindi'},{identifier:'spanish',name:'Spanish'},{identifier:'french',name:'French'}]