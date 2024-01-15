/* eslint-disable react/prop-types */


function BorderHolder({border}) {
    return (
        <div className="bg-white px-16 py-2 rounded shadow-sm shadow-darkGrayLM">
            <p>{border}</p>
        </div>
    );
}

export default BorderHolder;