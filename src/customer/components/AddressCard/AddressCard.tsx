const AddressCard = (props: { address: any }) => {
  return (
    <div>
      <div className=" space-y-3">
        <p className="font-semibold">
          {props.address?.firstName + " " + props.address?.lastName}
        </p>
        <p>
          {props.address?.state}, {props.address?.city}, &nbsp;
          {props.address?.streetAddress}, {props.address?.zipCode}
        </p>
        <div className=" space-y-3">
          <p className=" font-semibold">Phone Number</p>
          <p>{props.address?.mobile}</p>
        </div>
      </div>
    </div>
  );
};

export default AddressCard;
