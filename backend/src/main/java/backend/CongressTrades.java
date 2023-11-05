package backend;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;

@RestController
@RequestMapping(path = "/congress")
public class CongressTrades {

    private String generateAPIGet(LocalDate date) {
        final String API_BASE = "https://house-stock-watcher-data.s3-us-west-2.amazonaws.com/";
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("MM_dd_yyyy");
        return API_BASE + "data/transaction_report_for_" + formatter.format(date) + ".json";
    }

    private ArrayList<String> generateAllAPIGets(LocalDate startDate, LocalDate endDate) {
        LocalDate currentDate = startDate;
        ArrayList<String> apiCalls = new ArrayList<String>();

        while (currentDate.isBefore(endDate)) {
            apiCalls.add(generateAPIGet((currentDate)));

            currentDate = currentDate.plusDays(1);
        }

        return apiCalls;
    }

    @GetMapping(
            path = "/",
            produces = "application/json")
    public String getCongressTrades()
    {
        LocalDate start = LocalDate.of(2020, 6, 18);
        LocalDate end = LocalDate.of(2021, 6, 18);

        ArrayList<String> calls = generateAllAPIGets(start, end);

        // Add actual GET request for the calls


        return "";
    }

}
