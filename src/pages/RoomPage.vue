<template>
  <div> {{ username }} </div>
</template>

<script setup>
import io from "socket.io-client";
const username =
  sessionStorage.getItem("username") != "null"
    ? sessionStorage.getItem("username")
    : "Guest";
const key = sessionStorage.getItem("key");

const socketQuery = `?key=${key}&username=${username}`;
const socket = io(`http://localhost:3000/rooms${socketQuery}`);

socket.on(
  "game.data.received",
  ({
    id,
    username,
    maxPlayers,
    gameDurationSeconds,
    hintsEnabled,
    customWords,
    participants,
  }) => {}
);
</script>
