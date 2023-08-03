const express=require('express')
const app= express()
const path=require('path')
const hbs=require('hbs')
const port=3000
app.use(express.static(path.join(__dirname,'../public')))
const template=path.join(__dirname,'../templates/views')
const part=path.join(__dirname,'../templates/partials')


app.set('view engine','hbs')
app.set('views',template)

hbs.registerPartials(part)


app.get('/',(req,res)=>{

    res.render("index");
})

app.get('/weather',(req,res)=>{

    res.render("weather");
})
app.get('*',(req,res)=>{

    res.render("404",{
        error:"404"
    });
})


app.listen(port,()=>{
    console.log(`App listening to this http://:localhost${port}`)
})