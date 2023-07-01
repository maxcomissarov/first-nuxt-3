export default defineNuxtRouteMiddleware(()=> {
    console.log('Global')
    const pageVisitCount = useVisitCount();
    pageVisitCount.value++;
})