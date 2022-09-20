let markAsRead = document.getElementById("markasread");
// markAsRead.addEventListener("click", function(){
//     unseenElements = document.getElementsByClassName("notification--unseen");
//     unseenElements.forEach(element => {
//         element.classList.remove("notification--unseen");
//         console.log(element);
//     });
// })

markAsRead.addEventListener("click", function(){
    unseenElements =  Array.from(document.getElementsByClassName("notification--unseen"));
    unseenDots = Array.from(document.getElementsByClassName("notification__unseen"));
    unseenElements.forEach(element => element.classList.remove("notification--unseen"));
    unseenDots.forEach(element => element.remove());
    notificationsNumber = document.getElementById("notifications-number");
    notificationsNumber.innerHTML = "0";
 });
