class EmptyLayout extends React.Component {
    render(){
      const { match } = this.props
      return(
        <>
            <div className="login">
                <Switch>
                    <Route 
                        exact path={`${match.path}`}
                        render={(props) => <LoginPage {...props} /> }
                    />
                </Switch>
            </div>
        </>
      )
   }

 }

 EmptyLayout.propTypes = {
     match: PropTypes.any.isRequired
 }

export default EmptyLayout
