<template>
    
    <section class="border-2 border-dashboard-o  w-full  h-auto rounded-2xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" >
      <div class="flex flex-row justify-center gap-5 px-8 py-6 my-2 border-r-2 w-full border-dashboard-o " >
        <article class="flex flex-col justify-start">
            <p class="text-3xl font-bold" >89 935</p>
            <p>Utilisateurs totaux</p>
        </article>
        <button class="p-3 lg:p-3 lg:w-10 w-15 h-12 shadow-lg rounded-md" >
            <img src="../assets/images/users.png" class="h-5 " alt="">
        </button>
      </div>
      <div class="flex flex-row gap-5 justify-center px-8 py-6 my-2 border-r-2 w-full border-dashboard-o " >
        <article class="flex flex-col justify-start">
            <p class="text-3xl font-bold" >23 283,5</p>
            <p>demandes total</p>
        </article>
        <button class="p-3 w-15 h-12 shadow-lg rounded-md" >
            <img src="../assets/images/case.png" class="h-5" alt="">
        </button>
      </div>
      <div class="flex flex-row gap-5 justify-center px-8 py-6 my-2 border-r-2 w-full border-dashboard-o " >
        <article class="flex flex-col justify-start">
            <p class="text-3xl font-bold" >46 827</p>
            <p>demandes validées</p>
        </article>
        <button class="p-3 w-15 h-12 shadow-lg rounded-md" >
            <img src="../assets/images/check.png" class="h-5" alt="">
        </button>
      </div>
      <div class="flex flex-row gap-5 justify-center px-8 py-6 my-2  w-full  " >
        <article class="flex flex-col justify-start">
            <p class="text-3xl font-bold" >124 854</p>
            <p>Remboursé</p>
        </article>
        <button class="p-3 w-15 h-12 shadow-lg rounded-md" >
            <img src="../assets/images/arrow-right.png" class="h-5" alt="">
        </button>
      </div>
      

    </section>

</template>
<script >



export default {
  name: 'Welcome',

  setup() {
  

    return {
 
    };
  }
}
</script>