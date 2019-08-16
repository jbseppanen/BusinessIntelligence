package com.businessintelligence;

import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.github.mikephil.charting.charts.LineChart;
import com.github.mikephil.charting.components.AxisBase;
import com.github.mikephil.charting.components.Description;
import com.github.mikephil.charting.components.XAxis;
import com.github.mikephil.charting.data.Entry;
import com.github.mikephil.charting.data.LineData;
import com.github.mikephil.charting.data.LineDataSet;
import com.github.mikephil.charting.formatter.ValueFormatter;

import java.util.ArrayList;

import javax.annotation.Nonnull;

public class ReactChartManager extends SimpleViewManager<LineChart> {

    public static final String REACT_CLASS = "RNChartView";

    @Nonnull
    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Nonnull
    @Override
    public LineChart createViewInstance(@Nonnull ThemedReactContext context) {
        return new LineChart(context);
    }


    @ReactProp(name = "data")
    public void setData(LineChart chart, ReadableMap map) {
        ArrayList<Entry> entries = new ArrayList<>();
        ArrayList<String> xLabels = new ArrayList<>();
        ReadableArray dataList = map.getArray("dataList");
        if (dataList != null) {
            for (int i = 0; i < dataList.size(); i++) {
                ReadableMap item = dataList.getMap(i);
                assert item != null;
                entries.add(new Entry(item.getInt("seq"), (float) item.getDouble("value")));

                String dateString = item.getString("date");
                String month = dateString.split("-")[1];
                xLabels.add(month);
            }

            ValueFormatter formatter = new ValueFormatter() {
                @Override
                public String getAxisLabel(float value, AxisBase axis) {
                 String[] arr =  xLabels.toArray(new String[xLabels.size()]);
                    return arr[(int) value];
                }
            };

            LineDataSet dataSet = new LineDataSet(entries, map.getString("axisLabel"));
            LineData lineData = new LineData(dataSet);
            Description description = new Description();
            description.setText(map.getString("description"));
            XAxis xAxis = chart.getXAxis();
            xAxis.setGranularity(1f);
            xAxis.setValueFormatter(formatter);
            chart.setDescription(description);
            chart.setData(lineData);
            chart.invalidate();
        }
    }
}
