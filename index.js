const express = require('express')
const db=require('./Database/db')
const app = express()
const port = 3000
var cors = require('cors')
const swaggerJSDoc=require('swagger-jsdoc')
const swaggerUi=require('swagger-ui-express')

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


app.get('/', (req, res) => {
  res.send('Hello World!')
})

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

//@description:test 
 
/**
 * @swagger
 * /:
 *  get:
 *     summary: This api is used to check if get method is working or not
 *     
 *     responses:
 *         "200":
 *             description: To test Get method
 *       
 */


//@description:get all data  

/**
 * @swagger
 * /todo:
 *  get:
 *      summary: To get all task from mongodb
 *      description: this api is  used to fetch data from mongodb
 *      responses:
 *          "200":
 *              description: this api is  used to fetch data from mongodb
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
 *      summary: To get a particular task from mongodb
 *      description: this api is  used to fetch data from mongodb
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: ID is required
 *          schema:
 *            type: string
 *      responses:
 *          "200":
 *              description: this api is  used to fetch data from mongodb
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
 *      summary: used to insert data to mongodb
 *      description: this api is  used to fetch data from mongodb
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
 *      summary: used to update data to mongodb
 *      description: this api is  used to fetch data from mongodb
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
 *      summary: To delete a record from mongodb
 *      description: this api is  used to delete data from mongodb
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