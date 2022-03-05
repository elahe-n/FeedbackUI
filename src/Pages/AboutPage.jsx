import React from 'react'
import Card from '../component/Shared/Card'
import {Link} from 'react-router-dom'

function AboutPage() {
  return (
    <Card>
      <div className="about">
          <h1>Abput this project</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis autem consectetur nesciunt fugiat consequatur. Debitis soluta ullam odio nihil saepe labore provident corrupti similique voluptatibus, rerum, velit, perferendis consequatur iusto?</p>
          <p>
              <Link to='/'>Back to home</Link>
          </p>
      </div>
    </Card>
  )
}

export default AboutPage
