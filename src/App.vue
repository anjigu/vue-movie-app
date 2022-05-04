<template>
<Header />
<RouterView />
<Footer />
</template>


<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'

export default {
  cimponents: {
    Header,
    Footer
  }
}
</script>

