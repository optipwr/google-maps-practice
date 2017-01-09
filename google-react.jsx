function GoogleCity(props){
    return(
        <div className="city-name">
            <table>
                <tbody>
                    <tr>
                        <td>{props.cityObject.city}</td>
                        <td>{props.cityObject.yearRank}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

var Cities = React.createClass({
    render: function(){
        var cityRows = [];
        this.props.cities.map(function(currentCity, index){
            cityRows.push(<GoogleCity cityObject={currentCity} key={index} />)
        })
        return(
            <div>
                {cityRows}
            </div>
        )
    }
});



ReactDOM.render(
    <Cities cities={cities} />,
    document.getElementById('cities-container')
)