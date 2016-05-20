var React = require('react');
var CalcTable = require('../../CalcTable/CalcTable.jsx');

var advertiserInfo=[
  [{type:'cell', text:'Advertiser Name', color: '#ECECEC'},{type:'input', name:'company_name', placeholder:''}],
  [{type:'cell', text:'Desktop Site Visitors', color: '#ECECEC'},{type:'input', name:'desktop_site_visitors', placeholder:''}],
  [{type:'cell', text:'Desktop Conversion Rate', color: '#ECECEC'},{type:'input', name:'desktop_conversion_rate', placeholder:'Must Be Whole #'}],
  [{type:'cell', text:'Average Order Value', color: '#ECECEC'},{type:'input', name:'aov', placeholder:''}],
  [{type:'cell', text:'Mobile Users', color: '#ECECEC'},{type:'input', name:'mobile_users', placeholder:''}],
  [{type:'cell', text:'Mobile Conversion Rate', color: '#ECECEC'},{type:'input', name:'mobile_conv_rate', placeholder:''}],
  [{type:'cell', text:'Attribution Rate', color: '#ECECEC'},{type:'input', name:'attribution_rate', placeholder:''}]
];
var rateHeaders = ["Rate Topic","SH CPM","Recommeded CPM"];
var rateCard=[
  [{type:'cell', text:'Web Retargeting', color: '#ECECEC'},{type:'input', name:'web_retargeting', placeholder:''},{type:'cell', text:'$2.25-$4.50', color: 'transparent'}],
  [{type:'cell', text:'Prospecting', color: '#ECECEC'},{type:'input', name:'prospecting', placeholder:''},{type:'cell', text:'$1.50-$3.50', color: 'transparent'}],
  [{type:'cell', text:'FB Desktop INF', color: '#ECECEC'},{type:'input', name:'fb_desktop_inf', placeholder:''},{type:'cell', text:'$8.00-$12.00', color: 'transparent'}],
  [{type:'cell', text:'FB Mobile INF', color: '#ECECEC'},{type:'input', name:'fb_mobile_inf', placeholder:''},{type:'cell', text:'$6.00-$9.00', color: 'transparent'}],
  [{type:'cell', text:'FB RHC', color: '#ECECEC'},{type:'input', name:'fb_rhc', placeholder:''},{type:'cell', text:'$21.00-$2.00'}],
  [{type:'cell', text:'Mobile Retargeting', color: '#ECECEC'},{type:'input', name:'mobile Retargeting', placeholder:''},{type:'cell', text:'$2.25-$4.50'}]
];
var transparentPricing = [[{type:'select', options:[{value:'false', text:'No'},{value:'true', text:'Yes'}]}]];
var goalHeaders = ["","Retargeting","Prospecting","Facebook Dynamic Retargeting Channel Goal","Mobile"];
var advertiserGoals = [
  [{type:'cell', text:'Click ROAS', color: '#ECECEC'},{type:'input', name:'retargeting_click_roas', placeholder:''},{type:'input', name:'prospecting_click_roas', placeholder:''},{type:'input', name:'fb_click_roas', placeholder:''},{type:'input', name:'mobile_click_roas', placeholder:''}],
  [{type:'cell', text:'ROAS', color: '#ECECEC'},{type:'input', name:'retargeting_roas', placeholder:''},{type:'input', name:'prospecting_roas', placeholder:''},{type:'input', name:'fb_roas', placeholder:''},{type:'input', name:'mobile_roas', placeholder:''}],
  [{type:'cell', text:'Click eCPA', color: '#ECECEC'},{type:'input', name:'retargeting_click_ecpa', placeholder:''},{type:'input', name:'prospecting_click_ecpa', placeholder:''},{type:'input', name:'fb_click_ecpa', placeholder:''},{type:'input', name:'mobile_click_epca', placeholder:''}],
  [{type:'cell', text:'eCPA', color: '#ECECEC'},{type:'input', name:'retargeting_ecpa', placeholder:''},{type:'input', name:'prospecting_ecpa', placeholder:''},{type:'input', name:'fb_ecpa', placeholder:''},{type:'input', name:'mobile_epca', placeholder:''}]
];
var performanceHeaders=["Campaign Type","Retarget","Prospecting","FB Desktop NF","FB Moble NF","FB RHC","Mobile"];
var performance = [
  [{type:'cell', text:'SH Predicted Conversions', color: '#ECECEC'},{type:'output',name:'sh_pred_conv_retarget', color:'transparent'},{type:'output',name:'sh_pred_conv_prospecting',color:'transparent'},{type:'output',name:'sh_pred_conv_fb_desktop',color:'transparent'},{type:'output',name:'sh_pred_conv_fb_mobile',color:'transparent'},{type:'output',name:'sh_pred_conv_fb_rhc',color:'transparent'},{type:'output',name:'sh_pred_conv_mobile',color:'transparent'}],
  [{type:'cell', text:'SH Predicted Attributed Conversions', color: '#ECECEC'},{type:'output',name:'sh_pred_attr_conv_retarget',color:'transparent'},{type:'output',name:'sh_pred_attr_conv_prospecting',color:'transparent'},{type:'output',name:'sh_pred_attr_conv_fb_desktop',color:'transparent'},{type:'output',name:'sh_pred_attr_conv_fb_mobile',color:'transparent'},{type:'output',name:'sh_pred_attr_conv_fb_rhc',color:'transparent'},{type:'output',name:'sh_pred_attr_conv_mobile',color:'transparent'}],
  [{type:'cell', text:'SH Predicted Revenue', color: '#ECECEC'},{type:'output',name:'sh_pred_revenue_retarget',color:'transparent'},{type:'output',name:'sh_pred_revenue_prospecting',color:'transparent'},{type:'output',name:'sh_pred_revenue_fb_desktop',color:'transparent'},{type:'output',name:'sh_pred_revenue_fb_mobile',color:'transparent'},{type:'output',name:'sh_pred_revenue_fb_rhc',color:'transparent'},{type:'output',name:'sh_pred_revenue_mobile',color:'transparent'}],
  [{type:'cell', text:'SH Predicted Attributed Revenue', color: '#ECECEC'},{type:'output',name:'sh_pred_attr_revenue_retarget',color:'transparent'},{type:'output',name:'sh_pred_attr_revenue_prospecting',color:'transparent'},{type:'output',name:'sh_pred_attr_revenue_fb_desktop',color:'transparent'},{type:'output',name:'sh_pred_attr_revenue_fb_mobile',color:'transparent'},{type:'output',name:'sh_pred_attr_revenue_fb_rhc',color:'transparent'},{type:'output',name:'sh_pred_attr_revenue_mobile',color:'transparent'}],
  [{type:'cell', text:'SH Click Conversions', color: '#ECECEC'},{type:'output',name:'sh_click_conv_retarget',color:'transparent'},{type:'output',name:'sh_click_conv_prospecting',color:'transparent'},{type:'output',name:'sh_click_conv_fb_desktop',color:'transparent'},{type:'output',name:'sh_click_conv_fb_mobile',color:'transparent'},{type:'output',name:'sh_click_conv_fb_rhc',color:'transparent'},{type:'output',name:'sh_click_conv_mobile',color:'transparent'}],
  [{type:'cell', text:'SH Click Revenue', color: '#ECECEC'},{type:'output',name:'sh_click_revenue_retarget',color:'transparent'},{type:'output',name:'sh_click_revenue_prospecting',color:'transparent'},{type:'output',name:'sh_click_revenue_fb_desktop',color:'transparent'},{type:'output',name:'sh_click_revenue_fb_mobile',color:'transparent'},{type:'output',name:'sh_click_revenue_fb_rhc',color:'transparent'},{type:'output',name:'sh_click_revenue_mobile',color:'transparent'}]
];
var budgetHeaders = ["Campaign Type","Retargeting","Prospecting","Facebook Dynamic Retargeting","Mobile"];
var budget = [
  [{type:'cell', text:'Estimated Impressions', color: '#ECECEC'},{type:'output',name:'estimated_impression_retarget',color:'transparent'},{type:'output',name:'estimated_impression_prospecting',color:'transparent'},{type:'output',name:'estimated_impression_fb',color:'transparent'},{type:'output',name:'estimated_impression_mobile',color:'transparent'}],
  [{type:'cell', text:'Budget Recommendation', color: '#ECECEC'},{type:'output',name:'budget_retarget', color:'#ffe4e1'},{type:'output',name:'budget_prospecting', color:'#ffe4e1'},{type:'output',name:'budget_fb', color:'#ffe4e1'},{type:'output',name:'budget_mobile', color:'#ffe4e1'}]
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
          <div className="div-advertiser-info">
            <CalcTable table={advertiserInfo} headers={[]} size="col-md-12" table_name="Advertiser Info" />
          </div>
          <div className="div-right-panel clearfix">
            <div className="div-campaign-rate-card">
              <CalcTable table={rateCard} headers={rateHeaders} size="col-md-12" table_name="Campaign Usage Rate Card" />
            </div>
            <div className="div-transparent-pricing">
              <CalcTable table={transparentPricing} headers={[]} size="col-md-12" table_name="Transparent Pricing" />
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