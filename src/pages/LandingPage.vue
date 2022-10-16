<script setup>
import JoinRoomModal from "@/components/Modals/JoinRoomModal.vue";
import CreateRoomModal from "@/components/Modals/CreateRoomModal.vue";
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";

const showJoinRoomModal = ref(false);
const showCreateRoomModal = ref(false);
const joinModalRef = ref(null);
const createModalRef = ref(null);

const openJoinRoomModal = () => {
  showJoinRoomModal.value = true;
};

const openCreateRoomModal = () => {
  showCreateRoomModal.value = true;
};

onClickOutside(joinModalRef, () => {
  showJoinRoomModal.value = false;
});

onClickOutside(createModalRef, () => {
  showCreateRoomModal.value = false;
});
</script>

<template>
  <div class="flex justify-center items-center h-[100vh] w-full bg-slate-800">
    <div class="flex flex-col">
      <button
        @click="openJoinRoomModal"
        class="text-white border-2 border-cyan-900 px-2 py-1 rounded-md"
        >Join Room</button
      >
      <button
        class="text-white border-2 border-blue-900 px-2 py-1 rounded-md mt-3"
        @click="openCreateRoomModal"
        >Create Room</button
      >
    </div>
  </div>

  <JoinRoomModal ref="joinModalRef" v-if="showJoinRoomModal" />
  <CreateRoomModal ref="createModalRef" v-if="showCreateRoomModal" />
</template>
