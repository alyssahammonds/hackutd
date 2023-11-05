package backend;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;

@RestController
@RequestMapping(path = "/senate")
public class SenateTracker {

    private String generateAPIGet(LocalDate date) {
        final String API_BASE = "https://senate-stock-watcher-data.s3-us-west-2.amazonaws.com/";
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
    public String getCongressTrades() throws IOException, InterruptedException {

        LocalDate start = LocalDate.of(2021, 4, 11);
        LocalDate end = LocalDate.of(2023, 4, 11);

        ArrayList<String> calls = generateAllAPIGets(start, end);
        ArrayList<String> responses = new ArrayList<>();
        var client = HttpClient.newHttpClient(); //HTTP client


        for (String call : calls) {
            var request = HttpRequest.newBuilder()
                    .uri(URI.create(call))
                    .GET()
                    .build();

            // use the client to send the request
            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
            if(response.statusCode() == 200) {
                responses.add(response.body());
            }
        }


        return responses.toString();
    }

}

