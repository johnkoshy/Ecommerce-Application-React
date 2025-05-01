import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoDotFill } from 'react-icons/go';
import { Stacked, Pie, Button, SparkLine } from '../components';
import { earningData, dropdownData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

// DropDown component for selecting time periods
const DropDown = ({ currentMode }) => (
  // Container for dropdown with border and padding
  <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
    <DropDownListComponent
      id="time"
      // Define fields for dropdown text and value
      fields={{ text: 'Time', value: 'Id' }}
      // Style dropdown based on current mode (light/dark)
      style={{ border: 'none', color: currentMode === 'Dark' && 'white' }}
      // Default selected value
      value="1"
      // Data source for dropdown options
      dataSource={dropdownData}
      // Set popup dimensions
      popupHeight="220px"
      popupWidth="120px"
    />
  </div>
);

// Ecommerce component displays the main dashboard view
const Ecommerce = () => {
  // Destructure current theme color and mode from context
  const { currentColor, currentMode } = useStateContext();

  return (
    // Main container with top margin
    <div className="mt-12">
      {/* Section for dashboard cards */}
      <div className="dashboard-cards">
        {/* Earning card */}
        <div className="earning-card dark:text-gray-200 dark:bg-secondary-dark-bg h-44">
          <div className="flex justify-between items-center">
            <div>
              {/* Earning title and amount */}
              <p className="font-bold text-gray-400">Earning</p>
              <p className="text-2xl"><b>$198k</b></p>
            </div>
          </div>
          {/* Download button */}
          <div className="mt-6">
            <Button
              color="white"
              bgColor={currentColor}
              text="Download"
              borderRadius="10px"
              size="md"
            />
          </div>
        </div>
        {/* Cards for sales, customers, products, and refunds */}
        <div className="flex flex-nowrap justify-center gap-3 items-center m-3">
          {earningData.map((item) => (
            // Individual card for each earning data item
            <div
              key={item.title}
              className={`${
                item.title === 'Customers' ? 'customers-card' :
                item.title === 'Products' ? 'products-card' :
                item.title === 'Sales' ? 'sales-card' : 'refunds-card'
              } dark:text-gray-200 dark:bg-secondary-dark-bg w-48 p-4 pt-9 rounded-2xl`}
            >
              {/* Icon button with dynamic styling */}
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              {/* Amount and percentage display */}
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              {/* Card title */}
              <p className="text-sm text-gray-400 mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Revenue updates section */}
      <div className="flex gap-10 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 rounded-2xl md:w-780">
          {/* Header with title and legend */}
          <div className="flex justify-between">
            <p className="font-semibold text-xl">Revenue Updates</p>
            <div className="flex items-center gap-4">
              {/* Expense legend */}
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span><GoDotFill /></span>
                <span>Expense</span>
              </p>
              {/* Budget legend */}
              <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                <span><GoDotFill /></span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          {/* Revenue data and charts */}
          <div className="mt-10 flex gap-10 flex-wrap justify-center">
            <div className="border-r-1 border-color m-4 pr-10">
              {/* Budget data */}
              <div>
                <p>
                  <span className="text-3xl font-semibold">$93,438</span>
                  <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">23%</span>
                </p>
                <p className="text-gray-500 mt-1">Budget</p>
              </div>
              {/* Expense data */}
              <div className="mt-8">
                <p>
                  <span className="text-3xl font-semibold">$48,487</span>
                </p>
                <p className="text-gray-500 mt-1">Expense</p>
              </div>
              {/* Sparkline chart */}
              <div className="mt-5">
                <SparkLine
                  currentColor={currentColor}
                  id="line-sparkline"
                  type="Line"
                  height="80px"
                  width="250px"
                  data={SparklineAreaData}
                  color={currentColor}
                />
              </div>
              {/* Download report button */}
              <div className="mt-10">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="Download Report"
                  borderRadius="10px"
                />
              </div>
            </div>
            {/* Stacked chart */}
            <div>
              <Stacked width="320px" height="360px" currentColor="blue" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Export the Ecommerce component as default
export default Ecommerce;