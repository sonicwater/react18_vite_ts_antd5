import {
  RouterProvider,
  createBrowserRouter,
  useNavigate,
  Routes,
  Route,
} from "react-router-dom";
import { useEffect, useState } from 'react'
import { globalStore } from "@/stores/index";
import { observer } from "mobx-react";
import './App.css'

export default observer(() => {
  const { setRouterData, setPermissions } = globalStore;
  
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is a {count}
        </button>
      </div>
    </div>
  )
})
