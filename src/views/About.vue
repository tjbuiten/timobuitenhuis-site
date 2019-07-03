<template>
<div class="grid">
      <div class="floating-reverse">
        <app-triangle-text/>
      </div>
      <div class="floating">
        <app-triangle-reverse imageName="mugshot" route="/"/>
      </div>
      <div class="floating-reverse">
        <app-triangle-text/>
      </div>
      <div class="floating">
        <app-triangle-reverse/>
      </div>
      <div class="floating-reverse">
        <app-triangle-text/>
      </div>
      <div class="floating">
        <app-triangle-reverse/>
      </div>
    </div>
</template>

<style scoped>
.scale {
  height: 100%;
  width: 100%;
  align-content: center;
}
.grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(200px,  1fr));
  grid-template-rows: repeat(2, minmax(200px, 1fr));
}

.grid::before {
  content: '';
  width: 0;
  padding-bottom: 100%;
  grid-row: 1 / 1;
  grid-column: 1 / 1;
}

.grid > *:first-child {
  grid-row: 1 / 1;
  grid-column: 1 / 1;
}

.gridOne {
  grid-column: 2 / 2;
  grid-row: 1 / 1;
}

.gridTwo {
  grid-column: 3 / 3;
  grid-row: 3 / 3;
}


</style>
