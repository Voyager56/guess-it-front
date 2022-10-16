<template>
  <div
    class="fixed top-[40%] left-[10%] md:left-[42%] z-10 flex items-center justify-center"
  >
    <div
      class="bg-cyan-900 w-[300px] h-fit text-white text-center flex flex-col items-center justify-start"
    >
      <h1 class="text-2xl py-[2rem] border-b-gray-700 border-b-[1px] w-full">
        Room Settings
      </h1>
      <Form v-slot="{ values, meta }" class="flex flex-col items-center">
        <label class="w-fit self-start opacity-60" for="username"
          >Enter Your Username</label
        >
        <Field
          id="username"
          name="username"
          as="input"
          rules="required"
          :value="username"
          class="bg-cyan-900 my-2 border-[#6C757D] border-[2px] px-3 py-2"
          placeholder="username"
        ></Field>
        <ErrorMessage
          name="username"
          class="text-pink-500 text-sm"
        ></ErrorMessage>
        <label class="w-fit self-start opacity-60" for="key"
          >Enter Room Key</label
        >
        <Field
          id="key"
          name="room key"
          as="input"
          rules="required"
          :value="key"
          class="bg-cyan-900 my-2 border-[#6C757D] border-[2px] px-3 py-2"
          placeholder="username"
        ></Field>
        <button
          :disabled="!meta.valid"
          @click="joinRoom(values)"
          class="py-3 border-sky-200 border-2 w-[200px] my-2"
        >
          Join Room
        </button>
      </Form>
    </div>
  </div>
</template>
<script setup>
import { Form, Field, ErrorMessage } from "vee-validate";

let username, key;
username = sessionStorage.getItem("username");
key = sessionStorage.getItem("key");

const joinRoom = () => {
  window.location.href = `/rooms/${key}`;
};
</script>

<style>
:root {
  --ms-tag-bg: #e31221;
  --ms-tag-color: #000000;
  --ms-bg-disabled: #000000;
  --ms-dropdown-bg: #000000;
  --ms-bg: #000000;
}
</style>
