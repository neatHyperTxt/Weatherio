const updateClock = ()=>
{

}
const initClock = ()=>
{
    updateClock();
    window.setInterval("updateClock()",1);
}