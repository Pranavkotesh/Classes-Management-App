import MiniDrawer from "../../shared/components/app-drawer-component/AppDrawerComponent";
import SummaryGrid from "../../shared/components/app-class-summary-grid/AppSummaryGridComponent";

const ClassSum= ()=>{
    return(
      <main>
        <MiniDrawer name='Classes Summary'/>
        <SummaryGrid/>
      </main>
    )
  }
  export default ClassSum;