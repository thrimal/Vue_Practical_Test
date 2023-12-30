<template>
  <div class="main-outer">
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <!-- Loop through your data -->
        <tr v-for="row in data" :key="row.id">
          <td>{{ row.name }}</td>
          <td>{{ row.email }}</td>
          <td>
            <button @click="toggleRow(row.id)">Toggle</button>
          </td>
        </tr>
        <!-- Expanded row -->
        <tr v-if="expandedRow">
          <td colspan="3">
            <table>
              <thead>
                <tr>
                  <th>Additional Data</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="c in expandedRow.array" :key="c">
                  <td>{{ c }}</td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from "vue";

const data = ref([
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    array: ["one", "two", "three"],
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "jane@example.com",
    array: ["one", "two", "three"],
  },
  // Add more data as needed
]);

const expandedRow = ref(null);

const toggleRow = (rowId) => {
  expandedRow.value =
    expandedRow.value === rowId
      ? null
      : data.value.find((row) => row.id === rowId);
};
</script>

<style lang="scss">
.main-outer {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background: rgb(243, 251, 253);
}
</style>
