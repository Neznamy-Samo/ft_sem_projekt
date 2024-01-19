<template>
  <div class="table-responsive">
    <table class="table text-center table-striped ">
      <thead>
      <tr>
        <th style="width: 34%; background-color: #3D405B; color: white;">Typy predplatného</th>
        <th style="width: 22%; background-color: #3D405B; color: white;">TIER 1</th>
        <th style="width: 22%; background-color: #3D405B; color: white;">TIER 2</th>
        <th style="width: 22%; background-color: #3D405B; color: white;">TIER 3</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, id) in subscriptionTypes" :key="id" :style="{ 'background-color': item.background, 'color': item.color }">
        <th scope="row" class="text-start">{{ item.name }}</th>
        <td>
          <i :class="'bi-' + item.tier1 + '-circle-fill'"></i>

        </td>
        <td>
          <i :class="'bi-' + item.tier2 + '-circle-fill'"></i>
        </td>
        <td>
          <i :class="'bi-' + item.tier3 + '-circle-fill'"></i>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>

import subscriptionData from "@/subscription.json";


export default {
  data() {
    return {
      subscriptions: subscriptionData.subscriptions,
    };
  },
  computed: {
    subscriptionTypes() {
      return this.subscriptions.map((subscription) => ({
        name: subscription.name,
        background: subscription.id % 2 === 0 ? '' : '#3D405B',
        color: subscription.id % 2 === 0 ? '' : 'white',
        tier1: subscription.tier1,
        tier2: subscription.tier2,
        tier3: subscription.tier3,
      }));
    },
  },
};
</script>
