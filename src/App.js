import { useState, useEffect } from 'react';
import './App.css';
import GroupbyUsers from './pages/users';
import GroupbyPriority from './pages/priority';
import GroupbyStatus from './pages/taskstatus';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders, faChevronUp } from "@fortawesome/free-solid-svg-icons";



function App() {
  
	const [Data, setData] = useState([])
	const [ticketData, setticketData] = useState('NO')
	const [userData, setuserData] = useState([])

	const getData = async () => {
			await fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
				.then(response => response.json())
				.then(data => {
				
			setData(data)
					
				})
				.catch(err => {
					console.log(err.message)
				})
				.finally(() => {
				})
		}

		useEffect(() => {
			getData()
		}, [])

	useEffect(()=>{
		setticketData(Data.tickets)
		setuserData(Data.users)
	},[Data]
	)



	const [showMenu, setShowMenu] = useState(false);

	const toggleMenu = () => {
		setShowMenu(!showMenu);
	};

	const [Groupby, setGroupby]= useState(localStorage.getItem('Groupby') || 'priority');
	const [Orderby, setOrderby]= useState(localStorage.getItem('Orderby') || 'priority');

	const groupbyHandler = (e) => {
		setGroupby(e.target.value);
	};

	const orderbyHandler = (e) => {
		setOrderby(e.target.value);
	};
	useEffect(() => {
		localStorage.setItem('Groupby', (Groupby));
	}, [Groupby]);

	useEffect(() => {
		localStorage.setItem('Orderby', (Orderby));
	}, [Orderby]);


	useEffect(() => {
		const handleClickOutside = (event) => {
		  const divToExclude = document.getElementById("menu-id");
		  const divDisplayToggle = document.getElementById("menu-toggle")
		  if (divToExclude  && !divToExclude.contains(event.target) && !divDisplayToggle.contains(event.target)) {
			setShowMenu(false);
		  }
		};
	
		document.addEventListener("click", handleClickOutside);
	
		return () => {
		  document.removeEventListener("click", handleClickOutside);
		};
	  }, []);
	
	

	return (
		
		<div className="App">
		<div className='Header'>
		
			<div id="menu-toggle" className="menu-toggle" onClick={toggleMenu}>
			<FontAwesomeIcon icon={faSliders} className="icc" />Display<FontAwesomeIcon icon={faChevronUp} rotation={180} className="icc"/>
			</div>
			{
				showMenu && (
			<div id="menu-id" className="menu active">
				<div className="select">
				<span>Grouping</span>
					<select value={Groupby} onChange={groupbyHandler} name="todos" className="filter-todo">
						<option value="priority">Priority</option>
						<option value="users">Users</option>
						<option value="status">Status</option>
					</select>
				</div>
				<div className="select">
				<span>Ordering</span>
					<select value={Orderby} onChange={orderbyHandler} name="todos" className="filter-todo">
						<option value="priority">Priority</option>
						<option value="title">Title</option>
					</select>
				</div>
			</div>
				)
			}
			
		</div>

		{(ticketData==='NO')?<div>Please Wait</div>:((Groupby==='priority')?<GroupbyPriority orderby={Orderby} ticketData={ticketData}/>:((Groupby==='users')?<GroupbyUsers orderby={Orderby} ticketData={ticketData} userData={userData}/>:<GroupbyStatus orderby={Orderby} ticketData={ticketData}/>))}

		</div>
	);
}

export default App;
