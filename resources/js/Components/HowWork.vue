<template>
  <div class="py-16">
    <section class="flex flex-row py-5 justify-between">
      <p class="text-2xl md:text-4xl font-bold">Comment ça marche ?</p>
      <ol class="text-secondary text-sm md:text-md font-extralight">
        <li>
          1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
          perferendis!
        </li>
        <li>
          2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
          perferendis!
        </li>
        <li>
          3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
          perferendis!
        </li>
      </ol>
    </section>
    <section id="video-container" class="h-[25vh] md:h-[40vh] lg:h-[50vh] my-4 flex flex-row justify-start items-end p-8  rounded-2xl">
   
      <button class=" rounded-full relative size-12 md:size-16 lg:size-24 flex flex-row justify-center items-center bg-white"><img src="../assets/images/play.png" class="size-full" alt=""></button>
    </section>
  </div>
</template>
<script>
export default {
  name: "HowWork",
};
</script>
<style>
#video-container {
  background-image: url("../assets/images/videoContainer.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
</style>
