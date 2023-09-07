<template>
  <div class="home">
    <div class="mx-auto max-w-screen-lg">
      <div class="flex items-center flex-col justify-center">
        <div
          class="btn cursor-pointer"
          @click="$store.commit('GetRandomQuote')"
        >
          Get Random Quote
        </div>
        <p
          v-if="typeof $store.state.quote._id != 'undefined'"
          class="mb-6 my-10 text-2xl text-center text-gray-500"
        >
          <span> "{{ $store.state.quote.content }}" </span> <br />
          <span class="text-gray-400">{{ $store.state.quote.author }}</span>
        </p>
      </div>
    </div>
  </div>
</template>
