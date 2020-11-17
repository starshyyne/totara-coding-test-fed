<!--
The task: Correctly arrange component data into suitable part of the Vue API
Properties:
 - Data, named `id`, that is a static String and has a value of `feature`
 - Data, named `list`, that is received from a parent component and has a default value
 - Data, named `description`, that is a String in the format "This list contains x item(s).", where `x` is equal to the number of `list` items provided to this component.
-->

<template>
  <div class="child">
    <h2>Child test component</h2>
    <p>ID: {{ id }}</p>
    <p>Description: {{ description }}</p>
  </div>
</template>

<script>
import Parent from './components/Parent.vue'

export default {
  mounted() {
    this.list;
    this.listCount();
  }, 
  props: {
    list: {
        type: Array,
        default: () => ["one", "two", "three" ]
    }
  },  
  computed: {
    listCount: function () {
      let list = this.list;
      return list.length();
    }
  },
  data () {
    return {
        id: 'feature',
        description: "This list contains " + listCount + " items"
      }
  },
  components: {
    Parent
  }
}
</script>