const express = require('express')
const path = require('path');
const db=require('./Database/db')
const app = express()
const port = process.env.PORT || 3000
var cors = require('cors')
const swaggerJSDoc=require('swagger-jsdoc')
const swaggerUi=require('swagger-ui-express')
var compression = require('compression')


app.use(compression())
app.use(cors())
app.use(express.json())
db();

const options={
  definition:{
    openapi:'3.0.0',
    info:{
      title:'TODO API',
      version:'1.0.0'
    },
    servers:[
      {
        url:'https://todoapi-fzr2.onrender.com/'
      }
    ]
  },
  apis:['./index.js']
}

const swaggerSpec=swaggerJSDoc(options)
app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerSpec))


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

const todo=require('./routes/todo')

app.use('/todo',todo)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})





//  Swagger Documentation


//@description:Swagger Schema

/**
 * @swagger
 *  components:
 *      schema:
 *          todo:
 *              type: object
 *              properties:
 *                  _id:
 *                     type: string
 *                  task:
 *                     type: string
 *                  severity:
 *                     type: string
 *                  completed:
 *                     type: boolean
*          todop:
 *              type: object
 *              properties:
 *                  task:
 *                     type: string
 *                  severity:
 *                     type: string
 *                  completed:
 *                     type: boolean
 */


//@description:get all data  

/**
 * @swagger
 * /todo:
 *  get:
 *      summary: To get all task from database
 *      description: this api is  used to fetch data from database
 *      responses:
 *          "200":
 *              description: this api is  used to fetch data from database
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                               $ref: '#components/schema/todo'
 */


//@description:get specific data  

/**
 * @swagger
 * /todo/{id}:
 *  get:
 *      summary: To get a particular task from database
 *      description: this api is  used to fetch data from database
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: ID is required
 *          schema:
 *            type: string
 *      responses:
 *          "200":
 *              description: this api is  used to fetch data from database
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                               $ref: '#components/schema/todo'
 */


//@description:Post data  

/**
 * @swagger
 * /todo:
 *  post:
 *      summary: To insert task to database
 *      description: this api is  used to post data to database
 *      requestBody:
 *          requires: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/todop'
 *      responses:
 *          "200":
 *              description: Added Successfully
 */

//@description:Update data  


/**
 * @swagger
 * /todo/{id}:
 *  put:
 *      summary: To update task in database
 *      description: this api is  used to update data from database
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: ID is required
 *          schema:
 *            type: string
 *      requestBody:
 *          requires: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/todop'
 *      responses:
 *          "200":
 *              description: Updated Successfully
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                               $ref: '#components/schema/todo'
 */



//@description:Delete data  

/**
 * @swagger
 * /todo/{id}:
 *  delete:
 *      summary: To delete a record from database
 *      description: this api is  used to delete data from database
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: ID is required
 *          schema:
 *            type: string
 *      responses:
 *          "200":
 *              description: data is deleted
 */