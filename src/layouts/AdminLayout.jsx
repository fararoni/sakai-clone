class AdminLayout extends React.Component {

    render(){
      const { match } = this.props
      return(
        <>
            <div className="">
                <Header appTitle="React Multi Layout"/>
                <Switch>
                    <Route 
                        exact path={`${match.path}`}
                        render={(props) => <DashboardPage {...props} /> }/>
                    
                    <Route path={`${match.path}/pagea`} component={PageA} />
                    <Route path={`${match.path}/pageb`} component={PageB} />
                    <Route path={`${match.path}/pagec`} component={PageC} />
                </Switch>
                <Footer />
            </div>
        </>
      )
   }
 }

 AdminLayout.propTypes = {
     match: PropTypes.any.isRequired
 }

export default AdminLayout