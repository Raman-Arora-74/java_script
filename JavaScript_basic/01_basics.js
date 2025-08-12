// Variable and Context 


/* If we write const in front of a variable name then the 
variable has that fixed we can say that the variable is 
reserve for that value */

const accountId  = 423232

/* let is a keyword which is flexiable, we can change time 
to time and very helpful in scope data*/

let accountEmail = "raman@gmail.com"

accountEmail = "ramandeepsingh@gmail.com"

/* var is a keyword which is flexiable, but have some issue
in data scope so most probably avoid var keyword*/

var accountPassword = "12345"

accountPassword = "54321"

/*with no keyward in front of variable is cause very difficulty
so prefer to avoid this type of variable*/

accountCity = "Punjab"

/* This is the comment so u should use / and * to
make this type of comment which can be more then one 
line */

// is same like in python print 

console.log(accountCity)

// this table give us a table format with the index of our data 

console.table([accountId,accountEmail,accountPassword,accountCity])

/*console.table give us this type of data arrangement

  ┌─────────┬───────────────────┐
  │ (index) │ Values            │
  ├─────────┼───────────────────┤
  │ 0       │ 423232            │
  │ 1       │ 'Raman@gmail.com' │
  │ 2       │ '12345'           │
  │ 3       │ 'Punjab'          │
  └─────────┴───────────────────┘
*/




