import React from 'react'

function Body() {
  return (
        <div class="w-full mx-auto my-11 max-w-md bg-transparent">
            <div class='text-center text-black font-semibold bg-transparent'>
            Onboard & Monitor your certificates before they expire
            </div>
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mt-2 mb-4">
        <div class="mb-4 bg-white">
          <label class="block bg-white text-gray-700 text-sm font-bold mb-2 text-center" for="appid">
            APP ID:
          </label>
          <input class="border rounded w-full py-2 px-3 text-gray-700" id="appid" type="text" placeholder=""/>
        </div>
        <div class="mb-3 bg-white">
          <label class="bg-white block text-gray-700 text-sm font-bold mb-2 text-center" for="requester" >
            Requester's CDSID:
          </label>
          <input class="border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3" id="requester" type="text"/>
        </div>
        <div class="mb-3 bg-white">
          <label class="bg-white block text-gray-700 text-sm font-bold mb-2 text-center" for="cert-name" >
            Certificate Name:
          </label>
          <input class="border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3" id="cert-name" type="text"/>
        </div>
        <div class="mb-3 gap-7 bg-white ">
            <label class="bg-white text-gray-700 text-sm items-center font-bold gap-3 text-center" for="Patient">
            Certman Managed ?:
            </label>
            <input class="ml-3 mb-2" id="Patient" name="userType" type="checkbox"/>
      </div>
        <div class="bg-white flex items-center justify-center">
          <button class="bg-green-900 hover:bg-green-700 text-white font-bold py-2 px-4 rounded " type="button">
            Onboard My Certificate
          </button>
        </div>
      </form>
    </div>
  )
}

export default Body