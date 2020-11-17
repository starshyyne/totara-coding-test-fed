<!--
The task: Correctly arrange component data into suitable part of the Vue API
Properties:
 - Data, named `id`, that is a static String and has a value of `feature`
 - Data, named `list`, that is received from a parent component and has a default value
 - Data, named `description`, that is a String in the format "This list contains x item(s).", where `x` is equal to the number of `list` items provided to this component.
-->

<template>
  <div class="child">
    <h2>Child</h2>
    <p>ID: {{ id }}</p>
    <p>List: {{ list }}</p>
    <p>Description: {{ description }}</p>
  </div>
</template>

<script>
// import list from './component/Parent.vue'

export default {
  name: 'Child',
  filters: {
    description: function (value) {
      console.log('test');
    }
  },
  props: {
    list: {
        type: Array,
        default: () => ["one", "two", "three" ]
        }
    },
  data () {
    return {
        id: 'feature',
        description: "This list contains X items"
      }
  },
  // components: {
  //   list
  // }
}
</script>