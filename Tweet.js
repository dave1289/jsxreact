const Tweet = ({ username, firstname, date, message }) => {
   return (
      <div class="container tweet">
         <div class="card cardy-body">
            <div class="card-title display-6">{username}</div>
            <div class="card-title">{date}</div>
            <div class="card-body">
               <p class="display-6">{message}</p>
               <sub>{firstname}</sub>
            </div>
         </div>
      </div>)
}

