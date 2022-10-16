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
          rules=""
          class="bg-cyan-900 my-2 border-[#6C757D] border-[2px] px-3 py-2"
          placeholder="username"
        ></Field>
        <ErrorMessage
          name="username"
          class="text-pink-500 text-sm"
        ></ErrorMessage>
        <label class="w-fit self-start opacity-60" for="maxPlayers"
          >Input Max Players Allowed In Room</label
        >
        <Field
          id="maxPlayers"
          name="participants"
          as="input"
          rules="numeric"
          value="5"
          class="bg-cyan-900 my-2 border-[#6C757D] border-[2px] px-3 py-2"
          placeholder="Max Players"
        ></Field>
        <ErrorMessage
          name="participants"
          class="text-pink-500 text-sm"
        ></ErrorMessage>
        <label class="w-fit self-start opacity-60" for="maxPlayers"
          >Input Duration Of Each Round</label
        >
        <Field
          id="gameDuration"
          name="duration"
          as="input"
          rules="numeric"
          value="60"
          class="bg-cyan-900 my-2 border-[#6C757D] border-[2px] px-3 py-2"
          placeholder="Game Duration"
        ></Field>
        <ErrorMessage
          name="duration"
          class="text-pink-500 text-sm"
        ></ErrorMessage>
        <div class="self-start w-fit">
          <Field
            id="disableHints"
            name="hints"
            type="checkbox"
            value="true"
            class="bg-cyan-900 my-2 ml-3 mr-2"
            placeholder="Disable Hints"
          ></Field>
          <label for="disableHints" class="text-white">Disable Hints</label>
        </div>
        <button
          :disabled="!meta.valid"
          @click="createRoom($event, values)"
          class="py-3 border-sky-200 border-2 w-[200px] my-2"
        >
          Create Room
        </button>
      </Form>
    </div>
  </div>
</template>

<script setup>
import { Form, Field, ErrorMessage } from "vee-validate";

const createRoom = (e, formValues) => {
  e.preventDefault();
  const { participants, duration, hints } = formValues;
  const query = `?maxPlayers=${participants}&gameDurationSeconds=${duration}&disableHints=${
    hints === "true" ? true : false
  }&customWords=''`;

  fetch("http://localhost:3000/rooms" + query, {
    method: "POST",
  })
    .then((res) => res.json())
    .then((data) => {
      sessionStorage.setItem("key", data.key);
      sessionStorage.setItem(
        "username",
        formValues.username != undefined ? formValues.username : null
      );
      window.location.href = "/rooms/" + data.key;
    })
    .catch((err) => {
      console.log(err);
    });
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
