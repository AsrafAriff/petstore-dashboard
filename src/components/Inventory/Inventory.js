//testing redux
import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  fetchInventoryRequest,
  fetchInventorySuccess,
  fetchInventoryFailure,
} from "../actions/inventoryActions";

const InventoryList = ({
  inventory,
  loading,
  error,
  fetchInventoryRequest,
  fetchInventorySuccess,
  fetchInventoryFailure,
}) => {
  useEffect(() => {
    fetchInventoryRequest();

    // Simulate API call
    setTimeout(() => {
      const fakeInventoryData = [
        { id: 1, name: "Item 1" },
        { id: 2, name: "Item 2" },
      ];
      fetchInventorySuccess(fakeInventoryData);
    }, 2000);
  }, [fetchInventoryRequest, fetchInventorySuccess]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Inventory List</h2>
      {inventory.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  inventory: state.inventory.inventory,
  loading: state.inventory.loading,
  error: state.inventory.error,
});

const mapDispatchToProps = {
  fetchInventoryRequest,
  fetchInventorySuccess,
  fetchInventoryFailure,
};

export default connect(mapStateToProps, mapDispatchToProps)(InventoryList);

// Connect other components to Redux if needed
