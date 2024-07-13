import React from 'react'
import SearchBar from './SearchBar'
import GptSuggestMovie from './GptSuggestMovie'
import { BG_IMG } from './utils/constonts'

const SearchPage = () => {
  return (
    <div>
          <div className="fixed -z-10">
        <img
          className="object-cover w-full h-full"
          src={BG_IMG}
          alt="back-image"
        />
      </div>
        <SearchBar/>
        <GptSuggestMovie/>
    </div>
  )
}

export default SearchPage