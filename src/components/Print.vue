<template>
    <div class="print" @click="printImage">
        <img src="../imgs/print.png" alt="" class=" h-full w-auto">
    </div>
</template>

<script>
export default {
    methods: {
        printImage() {
            const imageUrl = this.$store.state.readyUrl
            if (imageUrl === '') {
                alert('Generate qr at first')
                return
            }
            const image = new Image()
            image.src = imageUrl

            const printObject = window.open('', 'PrintWindow', 'width=750,height=650,top=50,left=50,toolbars=no,scrollbars=yes,status=no,resizable=yes')
            printObject.document.write(`<img src="${imageUrl}">`)

            printObject.print()
            printObject.close()
        }
    }
}
</script>
