<template>
  <header>
    <ul>
      <li class="active">
        <nuxt-link to="/">A-Z</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/Temperature">Temperature</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/LastUpdated">Last updated</nuxt-link>
      </li>
    </ul>
  </header>
</template>

<style>
header ul {
  display: flex;
  justify-content: center;
  list-style: none;
  font-size: 17px;
  border-bottom: 1px solid gray;
  height: inherit;
  margin: 0;
}
li {
  padding: 14px 0;
}
a {
  padding: 0 16px;
  text-decoration: none;
  height: inherit;
  color: #cfcfcf;
}
ul li:hover {
  border-bottom: 3px solid #c5eff1;
}

.active {
  border-bottom: 3px solid #c5eff1;
  color: #c4c4c4;
  font-weight: 500;
}
</style>
