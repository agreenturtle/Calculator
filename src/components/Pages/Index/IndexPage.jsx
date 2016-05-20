var React = require('react');
var CalcTable = require('../../CalcTable/CalcTable.jsx');

var advertiserInfo=[
  [{type:'cell', text:'Advertiser Name', color: '#faf0e6'},{type:'input', name:'company_name', placeholder:''}],
  [{type:'cell', text:'Desktop Site Visitors', color: '#faf0e6'},{type:'input', name:'desktop_site_visitors', placeholder:''}],
  [{type:'cell', text:'Desktop Conversion Rate', color: '#faf0e6'},{type:'input', name:'desktop_conversion_rate', placeholder:'Must Be Whole #'}],
  [{type:'cell', text:'Average Order Value', color: '#faf0e6'},{type:'input', name:'aov', placeholder:''}],
  [{type:'cell', text:'Mobile Users', color: '#faf0e6'},{type:'input', name:'mobile_users', placeholder:''}],
  [{type:'cell', text:'Mobile Conversion Rate', color: '#faf0e6'},{type:'input', name:'mobile_conv_rate', placeholder:''}],
  [{type:'cell', text:'Attribution Rate', color: '#faf0e6'},{type:'input', name:'attribution_rate', placeholder:''}]
];
var rateHeaders = ["Rate Topic","SH CPM","Recommeded CPM"];
var rateCard=[
  [{type:'cell', text:'Web Retargeting', color: '#faf0e6'},{type:'input', name:'web_retargeting', placeholder:''},{type:'cell', text:'$2.25-$4.50', color: 'transparent'}],
  [{type:'cell', text:'Prospecting', color: '#faf0e6'},{type:'input', name:'prospecting', placeholder:''},{type:'cell', text:'$1.50-$3.50', color: 'transparent'}],
  [{type:'cell', text:'FB Desktop INF', color: '#faf0e6'},{type:'input', name:'fb_desktop_inf', placeholder:''},{type:'cell', text:'$8.00-$12.00', color: 'transparent'}],
  [{type:'cell', text:'FB Mobile INF', color: '#faf0e6'},{type:'input', name:'fb_mobile_inf', placeholder:''},{type:'cell', text:'$6.00-$9.00', color: 'transparent'}],
  [{type:'cell', text:'FB RHC', color: '#faf0e6'},{type:'input', name:'fb_rhc', placeholder:''},{type:'cell', text:'$21.00-$2.00'}],
  [{type:'cell', text:'Mobile Retargeting', color: '#faf0e6'},{type:'input', name:'mobile Retargeting', placeholder:''},{type:'cell', text:'$2.25-$4.50'}]
];
var transparentPricing = [[{type:'select', options:[{value:'false', text:'No'},{value:'true', text:'Yes'}]}]];
var goalHeaders = ["","Retargeting","Prospecting","Facebook Dynamic Retargeting Channel Goal","Mobile"];
var advertiserGoals = [
  [{type:'cell', text:'Click ROAS', color: '#faf0e6'},{type:'input', name:'retargeting_click_roas', placeholder:''},{type:'input', name:'prospecting_click_roas', placeholder:''},{type:'input', name:'fb_click_roas', placeholder:''},{type:'input', name:'mobile_click_roas', placeholder:''}],
  [{type:'cell', text:'ROAS', color: '#faf0e6'},{type:'input', name:'retargeting_roas', placeholder:''},{type:'input', name:'prospecting_roas', placeholder:''},{type:'input', name:'fb_roas', placeholder:''},{type:'input', name:'mobile_roas', placeholder:''}],
  [{type:'cell', text:'Click eCPA', color: '#faf0e6'},{type:'input', name:'retargeting_click_ecpa', placeholder:''},{type:'input', name:'prospecting_click_ecpa', placeholder:''},{type:'input', name:'fb_click_ecpa', placeholder:''},{type:'input', name:'mobile_click_epca', placeholder:''}],
  [{type:'cell', text:'eCPA', color: '#faf0e6'},{type:'input', name:'retargeting_ecpa', placeholder:''},{type:'input', name:'prospecting_ecpa', placeholder:''},{type:'input', name:'fb_ecpa', placeholder:''},{type:'input', name:'mobile_epca', placeholder:''}]
];
var performanceHeaders=["Campaign Type","Retarget","Prospecting","FB Desktop NF","FB Moble NF","FB RHC","Mobile"];
var performance = [
  [{type:'cell', text:'SH Predicted Conversions', color: '#faf0e6'},{type:'output',color:'transparent'},{type:'output',color:'transparent'},{type:'output',color:'transparent'},{type:'output',color:'transparent'},{type:'output',color:'transparent'},{type:'output',color:'transparent'}],
  [{type:'cell', text:'SH Predicted AttributedConversions', color: '#faf0e6'},{type:'output',color:'transparent'},{type:'output',color:'transparent'},{type:'output',color:'transparent'},{type:'output',color:'transparent'},{type:'output',color:'transparent'},{type:'output',color:'transparent'}],
  [{type:'cell', text:'SH Predicted Revenue', color: '#faf0e6'},{type:'output',color:'transparent'},{type:'output',color:'transparent'},{type:'output',color:'transparent'},{type:'output',color:'transparent'},{type:'output',color:'transparent'},{type:'output',color:'transparent'}],
  [{type:'cell', text:'SH Predicted Attributed Revenue', color: '#faf0e6'},{type:'output',color:'transparent'},{type:'output',color:'transparent'},{type:'output',color:'transparent'},{type:'output',color:'transparent'},{type:'output',color:'transparent'},{type:'output',color:'transparent'}],
  [{type:'cell', text:'SH Click Conversions', color: '#faf0e6'},{type:'output',color:'transparent'},{type:'output',color:'transparent'},{type:'output',color:'transparent'},{type:'output',color:'transparent'},{type:'output',color:'transparent'},{type:'output',color:'transparent'}],
  [{type:'cell', text:'SH Click Revenue', color: '#faf0e6'},{type:'output',color:'transparent'},{type:'output',color:'transparent'},{type:'output',color:'transparent'},{type:'output',color:'transparent'},{type:'output',color:'transparent'},{type:'output',color:'transparent'}]
];
var budgetHeaders = ["Campaign Type","Retargeting","Prospecting","Facebook Dynamic Retargeting","Mobile"];
var budget = [
  [{type:'cell', text:'Estimated Impressions', color: '#faf0e6'},{type:'output',color:'transparent'},{type:'output',color:'transparent'},{type:'output',color:'transparent'},{type:'output',color:'transparent'}],
  [{type:'cell', text:'Budget Recommendation', color: '#faf0e6'},{type:'output', color:'#ffe4e1'},{type:'output', color:'#ffe4e1'},{type:'output', color:'#ffe4e1'},{type:'output', color:'#ffe4e1'}]
];

var Index = React.createClass({
  render: function(){
    var tempObj = [
      [{type:'cell', text:'Advertiser Name'},{type:'input', name:'company_name', placeholder:'test'}],
      [{type:'cell', text:'Desktop Site Visitors'},{type:'input', name:'company_name', placeholder:'test'}]
    ];
    return (
      <div className="container">
        <h2 className="title"> CANVAS CALCULATOR : NEW CUSTOMERS </h2>
        <p> Fill Out values in Yellow below. DO NOT TOUCH ANY OTHER PORTION. Budgets are located in RED at bottom </p>
        <p> **This tool is to be used after the pixel has been on the advertisers site for 30 days, or using information about MUVs and Site Conversion Rate from the advertiser or online source.** </p>
        <br />
        <div className="box">
          <div className="div-advertiser-info">
            <CalcTable table={advertiserInfo} headers={[]} size="col-md-12" table_name="Advertiser Info" />
          </div>
          <div className="div-right-panel">
            <div className="div-campaign-rate-card">
              <CalcTable table={rateCard} headers={rateHeaders} size="col-md-12" table_name="Campaign Usage Rate Card" />
            </div>
            <div className="div-transparent-pricing">
              <CalcTable table={transparentPricing} headers={[]} size="col-md-12" table_name="Transparent Pricing" />
            </div>
          </div>
        </div>
        <div className="div-full col-md-12">
          <CalcTable table={advertiserGoals} headers={goalHeaders} size="col-md-12" table_name="Goal Set By Advertiser (FILL IN ONLY ONE per Channel BELOW)" />
        </div>

        <div className="div-full col-md-12">
          <CalcTable table={performance} headers={performanceHeaders} size="col-md-12" table_name="Performance Prediction" />
        </div>

        <div className="div-full col-md-12">
          <CalcTable table={budget} headers={budgetHeaders} size="col-md-12" table_name="Budget Recommendation" />
        </div>
        
      </div>
    );
  }
});

module.exports = Index;