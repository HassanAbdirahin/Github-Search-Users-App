const form = document.querySelector('#myForm');

form.addEventListener('submit', function(e){
    e.preventDefault()

    const search = document.querySelector('#search').value
    const originalName = search.split(' ').join('');

    fetch(`https://api.github.com/users/${originalName}`)

    .then(res => res.json())
    .then(data => {
        console.log(data);
        const result = document.querySelector('.result');



        result.innerHTML = `
        
        <div class="p1">
        <img src="${data.avatar_url}" alt="">

        <div class="foll">
                <div> <h3>Following: </h3> <h3 class="follows">${data.following}</h3> </div>

                <div> <h3>Followers: </h3> <h3 class="followers">${data.followers}</h3> </div>
        </div>
    </div>

<div class="p2">
    <h1 class="name">${data.login}</h1>
    <h3 class="">${data.name}</h3>
    <p class"bio">${data.bio}</p>
    <p class="location">${data.location}</p>
    <a href="${data.html_url}" target="_blank"> <button class="button-9"><i class="fa-brands fa-github"></i> GITHUB</button> </a>
</div>
        `


    })

});