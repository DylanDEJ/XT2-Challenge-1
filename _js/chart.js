let participantChart = document.getElementById('participantChart').getContext('2d')
let activityChart = document.getElementById('activityChart').getContext('2d')
let signChart = document.getElementById('signChart').getContext('2d')

Chart.defaults.global.defaultFontColor = '#E5E5E54'

function random(){return Math.floor(Math.random() * 20) + 1;};

function sortNumber(a, b) {
    return b - a;
}

let numArray = [random(),random(),random(),random(),random()];
numArray.sort(sortNumber);


function getTime(hour){
    var date = new Date();
    return date.getHours() + hour + ":00";
}


let currentParticipantChart = new Chart(participantChart, {
    type:'pie',
    data:{
        labels:['Kartbaan', 'Lasergamen', 'Escaperoom', 'Bioscoop', 'Voetballen','Hockey','Pool','Dansles'],
        datasets:[{
            label:'Activiteiten',
            data:[
            random(),
            random(),
            random(),
            random(),
            random(),
            random(),
            random(),
            random()
            ]
        }]
    },
    
    options:{
        title:{
            display: true,
            text: 'Activiteiten',
            fontSize: 25
        },
        legend:{
            display: false
        },
        labelling:{
            display: true,
            labelString: 'hoi'
        }
    }
})

let topActivityChart = new Chart(activityChart, {
    type:'bar',
    data:{
        labels:['Kartbaan', 'Lasergamen', 'Escaperoom', 'Bioscoop', 'Voetballen'],
        datasets:[{
            label:'Activiteiten',
            data:numArray.sort(sortNumber)
            }]
    },
    
    options:{
        title:{
            display: true,
            text: 'Activiteiten',
            fontSize: 25
        }
    }
})

let signActivityChart  = new Chart(signChart, {
    type: 'line',
    data: {
        labels:[getTime(0), getTime(1), getTime(2), getTime(3), getTime(4)],
        datasets:[
        {
            label:'Kartbaan',
            lineTension: 0,
            borderColor: 'green',
            data:[            
                random(),
                random(),
                random(),
                random(),
                random()],
            fill: false
        },
        {
            label:'Lasergamen',
            lineTension: 0,
            borderColor: 'red',
            data:[            
                random(),
                random(),
                random(),
                random(),
                random()],
            fill: false    
        },
        {
            label:'Escaperoom',
            lineTension: 0,
            borderColor: 'black',
            data:[            
                random(),
                random(),
                random(),
                random(),
                random()],
            fill: false
        },
        {
            label:'Bioscoop',
            lineTension: 0,
            borderColor: 'yellow',
            data:[            
                random(),
                random(),
                random(),
                random(),
                random()],
            fill: false
        },
        {
            label:'Voetballen',
            lineTension: 0,
            borderColor: 'white',
            data:[            
                random(),
                random(),
                random(),
                random(),
                random()],
            fill: false
        },
        {
            label:'Hockey',
            lineTension: 0,
            borderColor: 'pink',
            data:[            
                random(),
                random(),
                random(),
                random(),
                random()],
            fill: false
        },
        {
            label:'Pool',
            lineTension: 0,
            borderColor: 'blue',
            data:[           
                random(),
                random(),
                random(),
                random(),
                random()],
            fill: false
        },
        {
            label:'Dansles',
            lineTension: 0,
            borderColor: 'purple',
            data:[            
                random(),
                random(),
                random(),
                random(),
                random()],
            fill: false
        } 
    ]
    },

    options: {
        title:{
            display: true,
            text: 'Activiteiten',
            fontSize: 25
        },
        legend: {
            align: 'center',
        }
        
    }
})