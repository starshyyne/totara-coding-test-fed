<!--
The task: Correctly arrange component data into suitable part of the Vue API
Properties:
 - Data, named `id`, that is a static String and has a value of `feature`
 - Data, named `list`, that is received from a parent component and has a default value
 - Data, named `description`, that is a String in the format "This list contains x item(s).", where `x` is equal to the number of `list` items provided to this component.
-->

<template>
  <div class="parent">
    <h2>Parent</h2>
    <p>{{ list }}</p>
  </div>
</template>

<script>
export default {
  name: 'Parent',
  data () {
    return {
      list: ["one", "two", "three" ]
    }
  }
}
</script>