<template>
  <section class="content-wrapper">
    <form action="http://www.w3schools.com/html/action_page.php" method="post" enctype="multipart/form-data">

      <textarea name="text" rows="25" cols="80" autofocus="autofocus" placeholder="write here"></textarea>

      <input type="text" name="tag" placeholder="해쉬태그">

      사용자 이미지 지정:
      <input type="file" name="fileUpload">

      <button type="submit" name="">저장</button>
    </form>


  </section>
</template>



<script>
export default {
  name: 'write',
  components: { }
}
</script>



<style lang='sass'>

</style>
