const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>{ data.place.name }</h1>
            <h1>
                Rating
            </h1>
            <h3>
                {data.rating}
            </h3>
            <h1>
                Description
            </h1>
            <h3>
                {data.description}
            </h3>
          </main>
        </Def>
    )
}
<a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
  Edit
</a>     
<form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
  <button type="submit" className="btn btn-danger">
    Delete
  </button>
</form> 
     


module.exports = show

