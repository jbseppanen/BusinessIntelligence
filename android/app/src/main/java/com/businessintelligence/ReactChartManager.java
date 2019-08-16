package com.businessintelligence;

import android.util.Log;

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
import java.util.Locale;

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
        ArrayList<String> xLabels = new ArrayList<>();
        ReadableArray dataList = map.getArray("dataList");
        if (dataList != null) {
            ArrayList<Entry> entries = new ArrayList<>(dataList.size());
            int j = 0;
            for (int i = (dataList.size() - 1); i >= 0; i--) {

                ReadableMap item = dataList.getMap(i);
                assert item != null;
                entries.add(new Entry((j), (float) item.getDouble("value")));

                //Extract date and split off time component.
                String dateString = item.getString("date").split(" ")[0];
                String[] dateArray = dateString.split("-");

                xLabels.add(String.format(Locale.getDefault(), "%s-%s", dateArray[1], dateArray[0]));
                j++;
            }

            ValueFormatter formatter = new ValueFormatter() {
                @Override
                public String getAxisLabel(float value, AxisBase axis) {
                    String[] arr = xLabels.toArray(new String[xLabels.size()]);
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
